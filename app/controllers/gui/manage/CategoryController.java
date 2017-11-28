package controllers.gui.manage;

import models.entities.KbjCategory;
import play.data.FormFactory;
import play.libs.concurrent.HttpExecutionContext;
import play.mvc.Controller;
import play.mvc.Result;
import repository.CategoryMapRepository;
import services.CategoryMapServices;

import javax.inject.Inject;
import java.util.List;
import java.util.concurrent.CompletionStage;

public class CategoryController extends Controller {

    private final CategoryMapRepository categoryMapRepository;
    private final FormFactory formFactory;
    private final HttpExecutionContext httpExecutionContext;
    private static CategoryMapServices categoryMapServices;

    @Inject
    public CategoryController(FormFactory formFactory,
                              CategoryMapRepository categoryMapRepository,
                              HttpExecutionContext httpExecutionContext,
                              CategoryMapServices categoryMapServices) {
        this.formFactory = formFactory;
        this.categoryMapRepository = categoryMapRepository;
        this.httpExecutionContext = httpExecutionContext;
        this.categoryMapServices = categoryMapServices;
    }

    public Result top() {

        CompletionStage<List<KbjCategory>> kbjFatherCates = categoryMapServices.findKbjFatherCates();
        List<KbjCategory> kbjFatherCatesa = kbjFatherCates
        for (CompletionStage<KbjCategory>  kbjFatherCate : kbjFatherCates) {

        }
        System.out.println();

        return ok(views.html.manage.categoryMap.render(kbjFatherCates));
    }
}
