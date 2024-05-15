package com.example.Task.Management.System.Task_Service.Repository;

import com.example.Task.Management.System.Task_Service.Data.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {


}
