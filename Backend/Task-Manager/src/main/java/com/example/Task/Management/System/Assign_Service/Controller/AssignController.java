package com.example.Task.Management.System.Assign_Service.Controller;

import com.example.Task.Management.System.Assign_Service.Data.Assign;
import com.example.Task.Management.System.Assign_Service.Service.AssignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(path = "api/assign")
public class AssignController {

    private final AssignService assignService;

    @Autowired
    public AssignController(AssignService assignService) {
        this.assignService = assignService;
    }

    @GetMapping("/assign")
    public List<Assign> getAllAssigns() {
        return assignService.getAllAssigns();
    }

    @GetMapping("/{taskId}/{userId}")
    public Assign getAssignById(@PathVariable Long taskId, @PathVariable Long userId) {
        return assignService.getAssignById(taskId, userId).orElse(null);
    }

    @PostMapping("/create")
    public void assignTask(@RequestBody Assign assign) {
        assignService.assignTask(assign);
    }

    @PutMapping("/{taskId}/{userId}")
    public void updateAssign(@PathVariable Long taskId, @PathVariable Long userId, @RequestBody Assign updatedAssign) {
        assignService.updateAssign(taskId, userId, updatedAssign.getStatus(), updatedAssign.getDeadline(), updatedAssign.getComment());
    }

    @DeleteMapping("/{taskId}/{userId}")
    public void deleteAssign(@PathVariable Long taskId, @PathVariable Long userId) {
        assignService.deleteAssign(taskId, userId);
    }

}
