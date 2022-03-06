package com.nal.backend.controller;

import com.nal.backend.domain.Role;
import com.nal.backend.domain.User;
import com.nal.backend.service.role.RoleService;
import com.nal.backend.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Controller
public class AuthController {
    @Autowired
    private UserService userService;
    @Autowired
    private RoleService roleService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        Optional<User> optionalUser = userService.findByEmail(user.getEmail());
        if (optionalUser.isPresent()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Set<Role> roleList = user.getRoles();
        Set<Role> roleDbList = new HashSet<>();
        for (Role role : roleList) {
            Role roleObj = roleService.findByName(role.getName());
            if (roleObj == null) {
                roleObj = role;
                roleService.save(roleObj);
            }
            roleDbList.add(roleObj);
        }
        user.setRoles(roleDbList);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userService.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @GetMapping("hello")
    public String hello() {
        return "hellO";
    }
}
