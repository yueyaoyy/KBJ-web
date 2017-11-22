package utils.solr;

import models.Product;

import java.util.List;

public interface SolrI {

    /**
     *
     * @param keyword
     * @param start
     * @param rows
     * @param sort eg: sort=price desc,score asc
     * @param fq  eg: fq=price:[100 To *]&fq=section:0
     * @return
     */
    //List<Product> query(String keyword, int start, int rows, String sort, String fq);

    /**
     * find from solr by the product skuid.
     * @param skuid
     * @return
     */
    //Product query(String skuid);





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
