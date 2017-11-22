package utils.solr;

import models.Product;
import org.apache.solr.client.solrj.SolrClient;
import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.impl.HttpSolrClient;
import org.apache.solr.client.solrj.response.QueryResponse;

import java.io.IOException;
import java.util.List;

public class SolrHttpUtil implements SolrI {

    private static final String URL = "http://192.168.0.3:8983/solr";

    private static final String PRODUCTS = "products";

    // 分页，每页显示的数量
    private static final int ROWS = 10;

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
        query.setRows(ROWS);

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

    /**
     * 删除所有索引
     */
    public void deleteAll() {
        SolrClient client = this.getHttpClient();

        try {
            //Deleting the documents from SolrI
            client.deleteByQuery(PRODUCTS,"*");

            //Saving the document
            client.commit();
        } catch(SolrServerException e) {
            e.printStackTrace();
        } catch(IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * 根据检索条件，取得商品List
     * @param collection
     * @param query solr检索条件
     * @return 商品List
     */
    private List<Product> getProducts(String collection, SolrQuery query) {
        SolrClient client = this.getHttpClient();

        try {
            QueryResponse response = client.query(collection, query);

            return response.getBeans(Product.class);
        } catch(SolrServerException e) {
            e.printStackTrace();
        } catch(IOException e) {
            e.printStackTrace();
        }

        return null;
    }

    /**
     * 建立与Solr服务的连接
     * @return
     */
    private SolrClient getHttpClient() {
        return new HttpSolrClient.Builder(URL)
                .withConnectionTimeout(10000)
                .withSocketTimeout(60000)
                .build();
    }

}
