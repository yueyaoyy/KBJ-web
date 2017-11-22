package models;

import io.ebean.Model;
import org.apache.solr.client.solrj.beans.Field;
import play.data.validation.Constraints;

import javax.persistence.Entity;

//@Entity
//public class Product extends Model {
public class Product {

    /**
     *
     */
    @Field("category_url")
    private String categoryUrl;

    /**
     *
     */
    @Field
    private String date;

    /**
     *
     */
    //@Constraints.Required
    @Field
    private String id;

    /**
     *
     */
    @Field
    private String img1;

    /**
     *
     */
    @Field
    private String img2;

    /**
     *
     */
    @Field
    private String img3;

    /**
     *
     */
    @Field
    private String img4;

    /**
     *
     */
    @Field("img1_max")
    private String img1Max;

    /**
     *
     */
    @Field("img2_max")
    private String img2Max;

    /**
     *
     */
    @Field("img3_max")
    private String img3Max;

    /**
     *
     */
    @Field("img4_max")
    private String img4Max;

    /**
     *
     */
    @Field("is_self_support")
    private boolean isSelfSupport;

    /**
     *
     */
    @Field
    private String name;

    /**
     *
     */
    @Field("origin_id")
    private String originId;

    /**
     *
     */
    @Field
    private double price;

    /**
     *
     */
    @Field
    private String params;

    /**
     *
     */
    @Field("shop_name")
    private String shopName;

    /**
     *
     */
    @Field("shop_url")
    private String shopUrl;

    /**
     *
     */
    @Field
    private String type;

    /**
     *
     */
    @Field
    private String url;

    public String getCategoryUrl() {
        return categoryUrl;
    }

    public void setCategoryUrl(String categoryUrl) {
        this.categoryUrl = categoryUrl;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getImg1() {
        return img1;
    }

    public void setImg1(String img1) {
        this.img1 = img1;
    }

    public String getImg2() {
        return img2;
    }

    public void setImg2(String img2) {
        this.img2 = img2;
    }

    public String getImg3() {
        return img3;
    }

    public void setImg3(String img3) {
        this.img3 = img3;
    }

    public String getImg4() {
        return img4;
    }

    public void setImg4(String img4) {
        this.img4 = img4;
    }

    public String getImg1Max() {
        return img1Max;
    }

    public void setImg1Max(String img1Max) {
        this.img1Max = img1Max;
    }

    public String getImg2Max() {
        return img2Max;
    }

    public void setImg2Max(String img2Max) {
        this.img2Max = img2Max;
    }

    public String getImg3Max() {
        return img3Max;
    }

    public void setImg3Max(String img3Max) {
        this.img3Max = img3Max;
    }

    public String getImg4Max() {
        return img4Max;
    }

    public void setImg4Max(String img4Max) {
        this.img4Max = img4Max;
    }

    public boolean isSelfSupport() {
        return isSelfSupport;
    }

    public void setSelfSupport(boolean selfSupport) {
        isSelfSupport = selfSupport;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOriginId() {
        return originId;
    }

    public void setOriginId(String originId) {
        this.originId = originId;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getParams() {
        return params;
    }

    public void setParams(String params) {
        this.params = params;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    public String getShopUrl() {
        return shopUrl;
    }

    public void setShopUrl(String shopUrl) {
        this.shopUrl = shopUrl;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
