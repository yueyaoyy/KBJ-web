package repository;

import io.ebean.Ebean;
import io.ebean.EbeanServer;
import models.entities.KbjCategory;
import play.db.ebean.EbeanConfig;

import javax.inject.Inject;
import java.util.List;
import java.util.concurrent.CompletionStage;

import static java.util.concurrent.CompletableFuture.supplyAsync;

public class CategoryMapRepository  {

    private final EbeanServer ebeanServer;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public CategoryMapRepository(EbeanConfig ebeanConfig, DatabaseExecutionContext executionContext) {
        this.ebeanServer = Ebean.getServer(ebeanConfig.defaultServer());
        this.executionContext = executionContext;
    }

    /**
     * 要移到阿戴的dao层里面
     */
    public CompletionStage<List<KbjCategory>> findFatherlist() {
        return supplyAsync(() -> {
                    return ebeanServer.find(KbjCategory.class).where()
                            .eq("parentId", 0)
                            .eq("isCrawleTarget", 1)
                            .eq("valid", 1).findList();
                },
                executionContext);
    }
}
