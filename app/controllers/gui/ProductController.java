package controllers.gui;

import play.mvc.*;

import views.html.productDetail;
import views.html.productSearch;

import java.util.*;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's product page.
 *  @author yue-yao
 *  @date 2017/11/24
 */
public class ProductController extends Controller{

    public Result search() {

        Map<String, String> searchProductL1 = new HashMap<>();
        searchProductL1.put("shopicon", "http://sf.manmanbuy.com/images/sitelogo/1.png");
        searchProductL1.put("title", "联想 拯救者R720 15.6英寸游戏本电脑 i7-7700HQ/8G/1T+256GSSD/GTX1050Ti 4G独显");
        searchProductL1.put("price", "7498.00");
        searchProductL1.put("image", "http://www.zuyushop.com:8013/ProPic/20176/2017060008101192947.jpg");
        searchProductL1.put("total_commits", "1419");
        searchProductL1.put("supplier", "自营");
        searchProductL1.put("goodsexist", "沧浪区有货");

        List<Map<String, String>> searchProductL = new ArrayList<>(Arrays.asList(searchProductL1, searchProductL1, searchProductL1, searchProductL1, searchProductL1, searchProductL1, searchProductL1, searchProductL1, searchProductL1));

        List<String> hotProductL = new ArrayList<>(Arrays.asList("iphone X", "iphone 8", "小米", "华为p10", "iphone 7", "新ipad pro", "小米6"));
        return ok(productSearch.render(searchProductL, hotProductL));
    }


    public Result productDetail() {
        Map<String, String> productCommentL1 = new HashMap<>();
        productCommentL1.put("name", "qq_222014FP");
        productCommentL1.put("quote", "1楼");
        productCommentL1.put("time", "2017/11/8 10:03:24");
        productCommentL1.put("image", "http://apic-qiniu.zuyushop.com/cuxiaoPic/image/mmbAdmin/20171107082657_6155.jpg");
        productCommentL1.put("con", "我也是49.一3");

        List<Map<String, String>> productCommentL = new ArrayList<>(Arrays.asList(productCommentL1, productCommentL1));

        List<String> hotProductL = new ArrayList<>(Arrays.asList("iphone X", "iphone 8", "小米", "华为p10", "iphone 7", "新ipad pro", "小米6"));
        return ok(productDetail.render(productCommentL, hotProductL));
    }
}
