package com.example.Task.Management.System.Assign_Service.Service;

import com.example.Task.Management.System.Assign_Service.Data.Assign;
import com.example.Task.Management.System.Assign_Service.Data.AssignId;
import com.example.Task.Management.System.Assign_Service.Repository.AssignRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class AssignService {

    public final AssignRepository assignRepository;

    @Autowired
    public AssignService(AssignRepository assignRepository) {
        this.assignRepository = assignRepository;
    }

    public List getAllAssigns() {
        return assignRepository.findAll();
    }
    public Optional<Assign> getAssignById(Long taskId, Long userId) {
        AssignId assignId = new AssignId();
        assignId.setTaskId(taskId);
        assignId.setUserId(userId);
        return assignRepository.findById(assignId);
    }


    public void assignTask(Assign assign) {
        assignRepository.save(assign);
    }
    public void updateAssign(Long taskId, Long userId, String status, Date deadline, String comment) {
        AssignId assignId = new AssignId(taskId, userId);
        Optional<Assign> optionalAssign = assignRepository.findById(assignId);
        if (optionalAssign.isPresent()) {
            Assign assign = optionalAssign.get();
            assign.setStatus(status);
            assign.setDeadline(deadline);
            assign.setComment(comment);
            assignRepository.save(assign);
        }
    }
    @Transactional
    public void deleteAssign(Long taskId, Long userId) {
        assignRepository.deleteByIdTaskIdAndIdUserId(taskId, userId);
    }


}
