package solr;

import com.typesafe.config.Config;
import models.Product;
import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.impl.HttpSolrClient;
import org.apache.solr.client.solrj.response.QueryResponse;
import solr.SolrI;

import javax.inject.Inject;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


public class SolrImpl implements SolrI {

    // TODO
    /*
     * defType	指定用于处理查询语句(参数q的内容)的查询解析器，eg:defType=lucene
     * sort	指定响应的排序方式：升序asc或降序desc.同时需要指定按哪个字段进行排序。eg: sort=price desc,score asc
     * start	指定显示查询结果的开始位置，默认是0
     * rows	指定一次显示多少行查询结果，默认是10
     * fq	指定用于对查询结果进行过滤的过滤器(也看作是一种query) eg: fq=price:[100 To *]&fq=setction:0
     * fl	指定查询结果中返回的字段，该字段的stored=”true”或docValues=”true” ,eg:fl=id,title,product(price, popularity)
     * debug	指定查询结果中携带额外的调试信息：时间信息debug=timing，“explain”信息debug=results,所有调试信息debug=query
     * explainOther	Allows clients to specify a Lucene query to identify a set of documents. If non-blank,the explain info of each document which matches this query, relative to the main query (specified by the q parameter) will be returned along with the rest of the debugging information.
     * timeAllowed	指定查询处理的时间，单位毫秒。如果查询在指定的时间未完成，则只返回部分信息
     * segmentTerminateEarly	Indicates that, if possible, Solr should stop collecting documents from each individual (sorted) segment once it can determine that any subsequent documents in that segment will not be candidates for the rows being returned. The default is false.
     * omitHeader	当设为true时，返回结果不包含头部信息(例如请求花费的时间等信息)，默认是false
     * wt	执行响应的输出格式：xml或json等
     * logParamsList	指定哪些参数需要写入log, eg:logParamsList=q,fq
     * echoParams	指定响应头部包含哪些参数，取值为none/all/explicit(默认值)
     */

    private final static String SERVER_CONF_KEY = "solr.server";
    private final static String SHARDS_CONF_KEY = "solr.shards";
    private final static String CONN_TIMEOUT_CONF_KEY = "solr.connection.timeout";
    private final static String SOCKET_TIMEOUT_CONF_KEY = "solr.socket.timeout";

    // 分页，每页显示数量的默认值
    private final static int DEFAULT_QUERY_ROWS = 10;
    private final static String PRODUCTS = "products";

    private static String server;
    private static List<String> shards;
    private static HttpSolrClient solrClient;
    private static int connectionTimeout;
    private static int socketTimeout;


    private final Config config;

    @Inject
    public SolrImpl(Config config) {
        this.config = config;
        init();
    }

    protected void init() {
        server = this.config.getString(SERVER_CONF_KEY);
        shards = this.config.getStringList(SHARDS_CONF_KEY);
        connectionTimeout = this.config.getInt(CONN_TIMEOUT_CONF_KEY);
        socketTimeout = this.config.getInt(SOCKET_TIMEOUT_CONF_KEY);

        this.solrClient = new HttpSolrClient.Builder(server)
                .withConnectionTimeout(connectionTimeout)
                .withSocketTimeout(socketTimeout)
                .build();
    }

    // TODO
    // should we release the solr connection?
    // or there is a pool mechanism in solr connection?



    @Override
    public List<Product> query(String keyword, int start, int rows, String sort, String fq) {
        Product product = new Product();
        List<Product> products = new ArrayList<>();
        products.add(product);
        return products;
    }

    @Override
    public List<Product> query(String keyword, String shop, int start, int rows, String sort, String fq) {
        Product product = new Product();
        List<Product> products = new ArrayList<>();
        products.add(product);
        return products;
    }

    @Override
    public List<Product> query(String[] skuids, int start, int rows, String sort, String fq) {
        Product product = new Product();
        List<Product> products = new ArrayList<>();
        products.add(product);
        return products;
    }

    @Override
    public Product query(String skuid) {
        Product product = new Product();
        return product;
    }

    @Override
    public Product queryByUrl(String url) {
        Product product = new Product();
        return product;
    }

    @Override
    public List<Product> queryByName(String name, int start, int rows, String sort) {
        Product product = new Product();
        List<Product> products = new ArrayList<>();
        products.add(product);
        return products;
    }
    /**
     * 根据name检索
     * @param name
     * @param start 分页(从0开始)
     * @param sort 排序
     * @param order 1：desc，0：asc
     * @param fq 过滤器查询,例:("id:jd_000000", "price:[1 TO 99]")
     */
    public List<Product> searchProductByName(String name, int start, String sort, int order, String... fq) {
        SolrQuery query = new SolrQuery();
        query.setQuery("name:" + name);

        // 筛选
        query.setFilterQueries(fq);

        // 分页
        query.setStart(start);
        query.setRows(DEFAULT_QUERY_ROWS);

        // 排序
        if (order == 1) {
            query.setSort(sort, SolrQuery.ORDER.desc);
        } else {
            query.setSort(sort, SolrQuery.ORDER.asc);
        }

        // 指定查询结果返回哪些字段
        query.setFields("id", "name", "price", "type", "img1", "url");

        return getProducts(PRODUCTS, query);
    }

    /**
     * 根据id检索
     * @param id
     * @return
     */
    public Product searchProductById(String id) {
        SolrQuery query = new SolrQuery();
        query.setQuery("id:" + id);

        return getProducts(PRODUCTS, query).get(0);
    }

//    /**
//     * 删除所有索引
//     */
//    public void deleteAll() {
//        SolrClient client = this.getHttpClient();
//
//        try {
//            //Deleting the documents from SolrI
//            client.deleteByQuery(PRODUCTS,"*");
//
//            //Saving the document
//            client.commit();
//        } catch(SolrServerException e) {
//            e.printStackTrace();
//        } catch(IOException e) {
//            e.printStackTrace();
//        }
//    }

    /**
     * 根据检索条件，取得商品List
     * @param collection
     * @param query solr检索条件
     * @return 商品List
     */
    private List<Product> getProducts(String collection, SolrQuery query) {

        try {
            QueryResponse response = this.solrClient.query(collection, query);

            return response.getBeans(Product.class);
        } catch(SolrServerException e) {
            e.printStackTrace();
        } catch(IOException e) {
            e.printStackTrace();
        }

        return null;
    }

}
