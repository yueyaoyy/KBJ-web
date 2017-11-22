package utils.solr;

import models.Product;

import java.util.List;

public interface SolrI {

    /**
     * 根据name检索
     * @param name
     * @param start 分页(从0开始)
     * @param sort 排序
     * @param order 1：desc，0：asc
     * @param fq 过滤器查询,例:("id:jd_000000", "price:[1 TO 99]")
     */
    public List<Product> searchProductByName(String name, int start, String sort, int order, String... fq);

    /**
     * 根据id检索
     * @param id
     * @return
     */
    public Product searchProductById(String id);

    /**
     * 删除所有索引
     */
    public void deleteAll();

}
