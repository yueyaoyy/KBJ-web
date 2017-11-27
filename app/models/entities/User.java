package models.entities;

import play.data.validation.Constraints;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.Constraint;

@Entity
public class User extends BaseModel {

    @Id
    public Long id;

    @Constraints.Required
    @Column(length = 30)
    public String name;

    @Constraints.Required
    @Column(length = 100)
    public String password;

    @Constraints.Required
    @Column(length = 1000)
    public String photoUrl;

    @Constraints.Required
    @Column(length = 50)
    public String email;

    @Constraints.Required
    @Column(length = 15)
    public String phone;

    @Constraints.Required
    @Column(columnDefinition = "boolean default true")
    public boolean isValid;
}
