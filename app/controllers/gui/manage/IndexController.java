package controllers.gui.manage;

import play.mvc.*;
import views.html.manage.index;

public class IndexController extends Controller {
    public Result index() {
        return ok(index.render());
    }
}
