package models.entities;

import io.ebean.Model;
import io.ebean.annotation.CreatedTimestamp;
import io.ebean.annotation.Transactional;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import java.util.Date;

/**
 *  @author yue-yao
 *  @date 2017/11/24
 */
@MappedSuperclass
public class BaseModel extends Model {
   private static final long serialVersionUID = 1658731911988408622L;

   @Column(nullable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
   public Date createDate;

   @Column(nullable = false, columnDefinition = "varchar(100) DEFAULT 'system'")
   public String createUser;

   @Column(nullable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
   public Date updateDate;

   @Column(nullable = false, columnDefinition = "varchar(100) DEFAULT 'system'")
   public String updateUser;

   protected final void doBeforeSave() {
      Date now = new Date();
      updateDate = now;

      if (updateUser == null || updateUser.isEmpty()) {
         updateUser = "system";
      }

      beforeSave();
   }

   protected final void doBeforeInsert() {
      Date now = new Date();
      createDate = updateDate = now;

      if (updateUser == null || updateUser.isEmpty()) {
         updateUser = "system";
      }

      if (createUser == null || createUser.isEmpty()) {
         createUser = "system";
      }
   }

   protected void beforeSave() {
   }

   @Override
   @Transactional
   public void save() {
      doBeforeSave();
      super.save();
   }

   @Override
   @Transactional
   public void update() {
      doBeforeSave();
      super.update();
   }

   @Override
   @Transactional
   public void insert() {
      doBeforeInsert();
      super.insert();
   }
}
