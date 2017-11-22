package controllers;

import models.Product;
import play.Logger;
import play.mvc.*;
import utils.SolrI;
import services.SolrImpl;

import java.util.*;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class HomeController extends Controller {

    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */
    public Result index() {

        Map<String, Object> categoryL1 = new HashMap<>();
        Map<String, Object> categoryL2 = new HashMap<>();
        Map<String, Object> categoryL3 = new HashMap<>();
        Map<String, Object> categoryL4 = new HashMap<>();
        Map<String, Object> categoryL5 = new HashMap<>();

        List<String> contentTitleL1 = new ArrayList<>(Arrays.asList("平板电视", "空调", "冰箱", "洗衣机", "洗衣机", "洗衣机", "洗衣机"));
        List<String> contentTitleL2 = new ArrayList<>(Arrays.asList("笔记本电脑", "显示器", "U盘"));
        List<String> contentTitleL3 = new ArrayList<>(Arrays.asList("手机", "对讲机"));
        List<String> contentTitleL4 = new ArrayList<>(Arrays.asList("打印机", "路由", "鼠标", "计算器"));
        List<String> contentTitleL5 = new ArrayList<>(Arrays.asList("电动牙刷", "体温计", "榨汁机", "血压计"));
//        contentTitleL.add("平板电视");
//        contentTitleL.add("空调");
//        contentTitleL.add("冰箱");

        categoryL1.put("contentTitle", contentTitleL1);
        categoryL1.put("categoryTitle", "大家电，生活用品");

        categoryL2.put("contentTitle", contentTitleL2);
        categoryL2.put("categoryTitle", "电脑，配件");

        categoryL3.put("contentTitle", contentTitleL3);
        categoryL3.put("categoryTitle", "手机数码");

        categoryL4.put("contentTitle", contentTitleL4);
        categoryL4.put("categoryTitle", "办公用品");

        categoryL5.put("contentTitle", contentTitleL5);
        categoryL5.put("categoryTitle", "个户，健康产品");

        List<Map<String, Object>> categoryL = new ArrayList<>(Arrays.asList(categoryL1, categoryL2, categoryL3, categoryL4, categoryL5));


        Map<String, String> homeProductL1 = new HashMap<>();
        homeProductL1.put("img", "http://www.yiteng365.com/photos/65317_6.jpg?");
        homeProductL1.put("comment", "12982");
        homeProductL1.put("support", "2347");
        homeProductL1.put("nonsupport", "1223");
        homeProductL1.put("title", "双十一必看： 天猫双11大促抢红包、购物补贴券");
        homeProductL1.put("price", "3元");
        homeProductL1.put("platform", "京东商城");
        homeProductL1.put("time", "11-07");

        Map<String, String> homeProductL2 = new HashMap<>();
        homeProductL2.put("img", "http://img10.360buyimg.com/n0/jfs/t1531/29/501435053/267248/16a16a0c/558a63fcNc8b1a857.jpg");
        homeProductL2.put("comment", "0");
        homeProductL2.put("support", "37");
        homeProductL2.put("nonsupport", "12");
        homeProductL2.put("title", "TYG楠竹实木家用砧板34*23*1.4cm");
        homeProductL2.put("price", "3元");
        homeProductL2.put("platform", "京东商城");
        homeProductL2.put("time", "11-07");

        Map<String, String> homeProductL3 = new HashMap<>();
        homeProductL3.put("img", "http://imgsrc.baidu.com/imgad/pic/item/63d0f703918fa0ec2304ab0d2c9759ee3c6ddbeb.jpg");
        homeProductL3.put("comment", "4");
        homeProductL3.put("support", "23");
        homeProductL3.put("nonsupport", "0");
        homeProductL3.put("title", "OLAY 玉兰油 眼周精粹 提拉紧致眼部精华乳 15ml");
        homeProductL3.put("price", "3元");
        homeProductL3.put("platform", "京东商城");
        homeProductL3.put("time", "11-07");

        Map<String, String> homeProductL4 = new HashMap<>();
        homeProductL4.put("img", "http://img000.hc360.cn/m6/M04/68/AA/wKhQoVV1MhKEbzwPAAAAAOKsReU561.jpg");
        homeProductL4.put("comment", "9");
        homeProductL4.put("support", "27");
        homeProductL4.put("nonsupport", "0");
        homeProductL4.put("title", "SUPER MILD 惠润 柔净洗发露 绿野芳香 600ml *3件");
        homeProductL4.put("price", "3元");
        homeProductL4.put("platform", "京东商城");
        homeProductL4.put("time", "11-07");

        Map<String, String> homeProductL5 = new HashMap<>();
        homeProductL5.put("img", "http://img4.imgtn.bdimg.com/it/u=1052943421,226563819&fm=27&gp=0.jpg");
        homeProductL5.put("comment", "90");
        homeProductL5.put("support", "60");
        homeProductL5.put("nonsupport", "0");
        homeProductL5.put("title", "Teddy Bear 泰迪熊 超薄透气 婴儿纸尿裤 S28片【4-8公斤】");
        homeProductL5.put("price", "3元");
        homeProductL5.put("platform", "京东商城");
        homeProductL5.put("time", "11-07");

        Map<String, String> homeProductL6 = new HashMap<>();
        homeProductL6.put("img", "http://www.tage365.com/images/201603/goods_img/1920_G_1458784340122.jpg");
        homeProductL6.put("comment", "88");
        homeProductL6.put("support", "245");
        homeProductL6.put("nonsupport", "0");
        homeProductL6.put("title", "限地区：蒙牛 优益C活菌型乳酸菌饮品 甜橙味 340ml");
        homeProductL6.put("price", "3元");
        homeProductL6.put("platform", "京东商城");
        homeProductL6.put("time", "11-07");

        List<Map<String, String>> homeProductL = new ArrayList<>(Arrays.asList(homeProductL1, homeProductL2, homeProductL3, homeProductL4, homeProductL5, homeProductL6));

        List<String> hotProductL = new ArrayList<>(Arrays.asList("iphone X", "iphone 8", "小米", "华为p10", "iphone 7", "新ipad pro", "小米6"));

        SolrI solr = new SolrImpl();

        //List<Product> searchProductByName(String name, int start, String sort, int order, String... fq);
        List<Product> products = solr.searchProductByName("*",0, "price", 1, new String[] {"id", "name", "price"});
        Logger.debug("-----------solr: " + products.size());

        return ok(views.html.index.render(categoryL, homeProductL, hotProductL));
    }

}
