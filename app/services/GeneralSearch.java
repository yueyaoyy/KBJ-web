package services;

import models.Product;
import solr.SolrI;
import javax.inject.Inject;
import java.util.List;

public class GeneralSearch {

    private static SolrI solr;
    @Inject
    public GeneralSearch(SolrI solr) {
        this.solr = solr;
    }

    /**
     * TODO
     * to be remove
     * just for test
     * @return
     */
    public static List<Product> query() {
        List<Product> products = solr.searchProductByName("*",0, "name", 1, "id:jd_1*", "price:[1 TO 10]");
        return products;
    }
}
