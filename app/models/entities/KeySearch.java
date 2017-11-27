package models.entities;

import play.data.format.Formats;
import play.data.validation.Constraints;
import play.data.validation.ValidationError;
import play.data.validation.Constraints.Validatable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.Constraint;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * KeySearch entity managed by Ebean
 */

@Constraints.Validate
@Entity
public class KeySearch extends BaseModel implements Validatable<List<ValidationError>> {

    @Id
    public Long id;

    @Constraints.Required
    public String keyWord;

    @Constraints.Required
    public Long searchCounts;

    @Override
    public List<ValidationError> validate() {
        final List<ValidationError> errors = new ArrayList<>();
        if (keyWord.length() < 2) {
            errors.add(new ValidationError("keyWord", "不能少于两个字"));
        }
        return errors;
    }
}
