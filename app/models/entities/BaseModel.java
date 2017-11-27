package models.entities;

import io.ebean.Model;
import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import java.util.Date;

@MappedSuperclass
public class BaseModel extends Model {

   @Column(columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
   public Date createDate;

   @Column(nullable = false, columnDefinition = "varchar(100)")
   public String createUser;

   @Column(columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
   public Date updateDate;

   @Column(nullable = false, columnDefinition = "varchar(100)")
   public String updateUser;
}
