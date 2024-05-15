package com.example.Task.Management.System.Assign_Service.Data;
// AssignId.java
import jakarta.persistence.Embeddable;

import java.io.Serializable;

@Embeddable
public class AssignId implements Serializable {

    private Long taskId;
    private Long userId;

    // Constructor
    public AssignId() {
    }

    public AssignId(Long taskId, Long userId) {
        this.taskId = taskId;
        this.userId = userId;
    }

    // Getters and setters
    public Long getTaskId() {
        return taskId;
    }

    public void setTaskId(Long taskId) {
        this.taskId = taskId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
