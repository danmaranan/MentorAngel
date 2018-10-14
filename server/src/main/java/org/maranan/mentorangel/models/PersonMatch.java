package org.maranan.mentorangel.models;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class PersonMatch {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String userNameMentor;
    private String userNameMentee;
    private boolean hasMentorApproval;
    private boolean hasMenteeApproval;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MM-dd-yyyy")
    private Date matchDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserNameMentor() {
        return userNameMentor;
    }

    public void setUserNameMentor(String userNameMentor) {
        this.userNameMentor = userNameMentor;
    }

    public String getUserNameMentee() {
        return userNameMentee;
    }

    public void setUserNameMentee(String userNameMentee) {
        this.userNameMentee = userNameMentee;
    }

    public boolean isHasMentorApproval() {
        return hasMentorApproval;
    }

    public void setHasMentorApproval(boolean hasMentorApproval) {
        this.hasMentorApproval = hasMentorApproval;
    }

    public boolean isHasMenteeApproval() {
        return hasMenteeApproval;
    }

    public void setHasMenteeApproval(boolean hasMenteeApproval) {
        this.hasMenteeApproval = hasMenteeApproval;
    }

    public Date getMatchDate() {
        return matchDate;
    }

    public void setMatchDate(Date matchDate) {
        this.matchDate = matchDate;
    }

}
