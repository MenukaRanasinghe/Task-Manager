package com.example.Task.Management.System.User_Service.Repository;

import com.example.Task.Management.System.User_Service.Data.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsernameOrEmail(String username, String email);
}
