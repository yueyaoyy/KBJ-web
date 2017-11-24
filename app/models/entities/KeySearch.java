package models.entities;

import play.data.format.Formats;
import play.data.validation.Constraints;
import play.data.validation.ValidationError;
import play.data.validation.Constraints.Validatable;

import javax.persistence.Entity;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * KeySearch entity managed by Ebean
 */

@Constraints.Validate
@Entity
public class KeySearch extends BaseModel implements Validatable<List<ValidationError>> {

    @Constraints.Required
    public String keyWord;

    @Constraints.Required
    public long searchCounts;

    @Formats.DateTime(pattern="yyyy-MM-dd")
    public Date dateAdded;

    @Formats.DateTime(pattern="yyyy-MM-dd")
    public Date dateModifiled;

    @Override
    public List<ValidationError> validate() {
        System.out.println(11111111);
        final List<ValidationError> errors = new ArrayList<>();
        if (keyWord.length() < 2) {
            errors.add(new ValidationError("keyWord", "不能少于两个字"));
        }
        if (searchCounts == 1) {
            errors.add(new ValidationError("searchCounts", "不能为1"));
        }
        return errors;
    }
}
