package com.example.Task.Management.System.Assign_Service.Data;

import jakarta.persistence.Entity;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Column;
import java.io.Serializable;
import java.util.Date;

@Entity
public class Assign implements Serializable {

    @EmbeddedId
    private AssignId id;

    @Column(name = "status")
    private String status;

    @Column(name = "deadline")
    private Date deadline;

    @Column(name = "comment")
    private String comment;

    public Assign() {
    }

    public Assign(AssignId id, String status, Date deadline, String comment) {
        this.id = id;
        this.status = status;
        this.deadline = deadline;
        this.comment = comment;
    }

    public AssignId getId() {
        return id;
    }

    public void setId(AssignId id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
