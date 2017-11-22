package utils;

import models.Product;

import java.util.List;

public interface SolrI {

    /**
     * find from solr by keyword with the consider of pagination and sort.
     * @param keyword
     * @param start
     * @param rows
     * @param sort eg: sort=price desc,score asc
     * @param fq  eg: fq=price:[100 To *]&fq=section:0
     * @return
     */
    List<Product> query(String keyword, int start, int rows, String sort, String fq);

    /**
     * find from solr with shop specified.
     * @param keyword
     * @param shop
     * @param start
     * @param rows
     * @param sort
     * @param fq
     * @return
     */
    List<Product> query(String keyword, String shop, int start, int rows, String sort, String fq);

    /**
     * find from solr by the array product skuids.
     * can be used in the hottest items & bargain items area in the top page.
     * for both of which need to query product from solr by id.
     * @param skuids
     * @param start
     * @param rows
     * @param sort
     * @param fq
     * @return
     */
    List<Product> query(String[] skuids, int start, int rows, String sort, String fq);

    /**
     * find from solr by the product skuid.
     * can be used in the hottest items & bargain items area in the top page.
     * for both of which need to query product from solr by id.
     * @param skuid
     * @return
     */
    Product query(String skuid);

    /**
     * find by the item url.
     * @param url
     * @return
     */
    Product queryByUrl(String url);

    /**
     * find from solr by the product name.
     * @param name
     * @param start
     * @param rows
     * @param sort
     * @return
     */
    List<Product> queryByName(String name, int start, int rows, String sort);





    /**
     * @param name
     * @param start 分页(从0开始)
     * @param sort 排序
     * @param order 1：desc，0：asc
     * @param fq 过滤器查询,例:("id:jd_000000", "price:[1 TO 99]")
     */
    List<Product> searchProductByName(String name, int start, String sort, int order, String... fq);


    /**
     * 根据id检索
     * @param id
     * @return
     */
    Product searchProductById(String id);

//    /**
//     * 删除所有索引
//     */
//    void deleteAll();

}
