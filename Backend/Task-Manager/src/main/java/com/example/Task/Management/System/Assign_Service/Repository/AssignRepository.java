package com.example.Task.Management.System.Assign_Service.Repository;

import com.example.Task.Management.System.Assign_Service.Data.Assign;
import com.example.Task.Management.System.Assign_Service.Data.AssignId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AssignRepository extends JpaRepository<Assign, AssignId> {
    void deleteByIdTaskIdAndIdUserId(Long taskId, Long userId);

    Optional<Assign> findById(AssignId assignId);
}

