package services;

import models.entities.KbjCategory;
import play.data.FormFactory;
import play.libs.concurrent.HttpExecutionContext;
import repository.CategoryMapRepository;

import javax.inject.Inject;
import java.util.List;
import java.util.concurrent.CompletionStage;

public class CategoryMapServices {

    private final CategoryMapRepository categoryMapRepository;
    private final FormFactory formFactory;
    private final HttpExecutionContext httpExecutionContext;

    @Inject
    public CategoryMapServices(FormFactory formFactory,
                              CategoryMapRepository categoryMapRepository,
                              HttpExecutionContext httpExecutionContext) {
        this.formFactory = formFactory;
        this.categoryMapRepository = categoryMapRepository;
        this.httpExecutionContext = httpExecutionContext;
    }

    public CompletionStage<List<KbjCategory>> findKbjFatherCates() {

        return categoryMapRepository.findFatherlist().thenApplyAsync(kbjFatherCates -> {
           return kbjFatherCates;
        }, httpExecutionContext.current());
    }
}
