package com.nal.backend.controller;

import com.nal.backend.domain.User;
import com.nal.backend.model.UserDTO;
import com.nal.backend.service.user.IUserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private IUserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<?> getUser(@PathVariable("id") Long id) {
        Optional<User> optionalUser = userService.findById(id);
        UserDTO userDTO = new UserDTO();
        if (optionalUser.isPresent()){
            User user = optionalUser.get();
            BeanUtils.copyProperties(user, userDTO);
            return new ResponseEntity<>(userDTO, HttpStatus.ACCEPTED);
        }else {
            return new ResponseEntity<>("Employee do not exist", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("")
    @PreAuthorize("#oauth2.hasScope('WRITE') AND hasRole('ROLE_ADMIN')")
    public ResponseEntity listUser() {
        return ResponseEntity.ok(userService.findAll());
    }

    @GetMapping("/profile")
    @PreAuthorize("hasAuthority('read_profile')")
    public ResponseEntity getProfile(Authentication authentication) {
        String username = authentication.getName();
        return ResponseEntity.ok(userService.findByEmail(username));
    }

}
