package models.entities;

import io.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class BaseModel extends Model {
   @Id
   public Long id;
}
