package controllers.api;

import models.Product;
import play.Logger;
import play.libs.Json;
import play.mvc.*;
import services.GeneralSearch;
import services.HottestSearch;

import javax.inject.Inject;
import java.util.*;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class HomeController extends Controller {

    private static GeneralSearch searcher;
    @Inject
    public HomeController(GeneralSearch searcher) {
        this.searcher = searcher;
    }

    public Result index() {

        // TODO
        // to be remove
        // just for test
        List<Product> products = searcher.query();
        Logger.debug("-----------solr: " + products.size());
        for (Product product : products) {
            Logger.debug(product.getId() + " : " + product.getName() + " : " + product.getPrice());
        }

        return ok(Json.toJson(products));
    }

}
