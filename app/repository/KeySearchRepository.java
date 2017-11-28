package repository;

import io.ebean.Ebean;
import io.ebean.EbeanServer;
import io.ebean.Transaction;
import models.entities.KeySearch;
import play.db.ebean.EbeanConfig;

import java.util.Date;
import java.util.List;
import javax.inject.Inject;

import java.util.Optional;
import java.util.concurrent.CompletionStage;

import static java.util.concurrent.CompletableFuture.supplyAsync;

public class KeySearchRepository {

    private final EbeanServer ebeanServer;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public KeySearchRepository(EbeanConfig ebeanConfig, DatabaseExecutionContext executionContext) {
        this.ebeanServer = Ebean.getServer(ebeanConfig.defaultServer());
        this.executionContext = executionContext;
    }

    public CompletionStage<Optional<KeySearch>> getRow(long id) {
        return supplyAsync(() -> {
            return Optional.ofNullable(ebeanServer.find(KeySearch.class).setId(id).findUnique());
        },
        executionContext);
    }

    public CompletionStage<List<KeySearch>> list() {
        return supplyAsync(() -> {
            return ebeanServer.find(KeySearch.class).findList();
            },
            executionContext);
    }

    public CompletionStage<Optional<Long>> edit(KeySearch newKeySearch, long id) {
        return supplyAsync(() -> {
            Transaction txn = ebeanServer.beginTransaction();

            try {
                KeySearch savedKeySearch = ebeanServer.find(KeySearch.class).setId(id).findUnique();
                if (savedKeySearch != null) {
                    savedKeySearch.keyWord = newKeySearch.keyWord;
                    savedKeySearch.searchCounts = newKeySearch.searchCounts;
//                    savedKeySearch.updateDate =  new Date(System.currentTimeMillis());

                    savedKeySearch.update();

                    txn.commit();
                }
            } finally {
                txn.end();
            }
            return Optional.empty();
        }, executionContext);
    }

    public CompletionStage<Optional<Long>> delete(long id) {
        return supplyAsync(() -> {
            try {
                Optional<KeySearch> keySearchOptional = Optional.ofNullable(ebeanServer.find(KeySearch.class).setId(id).findUnique());
//                keySearchOptional.ifPresent(c -> c.delete());
                KeySearch keySearchModel = keySearchOptional.get();
                keySearchModel.delete();
            } finally {
                return Optional.empty();
            }
        }, executionContext);
    }

    public CompletionStage<Optional<Long>> add(KeySearch keySearchForm) {
        return supplyAsync(() -> {
            try {
                keySearchForm.insert();
//                ebeanServer.insert(keySearchForm);
            } finally {
                return Optional.empty();
            }
        }, executionContext);
    }

    public CompletionStage<Optional<Long>> doNothing() {
        return supplyAsync(() -> {
            return Optional.empty();
        }, executionContext);
    }


}
