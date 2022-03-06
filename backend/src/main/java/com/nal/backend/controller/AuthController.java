package com.nal.backend.controller;

import com.nal.backend.model.JwtResponse;
import com.nal.backend.domain.Role;
import com.nal.backend.domain.User;
import com.nal.backend.model.UserDTO;
import com.nal.backend.service.jwt.JwtService;
import com.nal.backend.service.role.RoleService;
import com.nal.backend.service.user.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Set;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private IUserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDTO userDTO) {
        UsernamePasswordAuthenticationToken value = new UsernamePasswordAuthenticationToken(userDTO.getEmail(), userDTO.getPassword());

        Authentication authentication = authenticationManager.authenticate(value);

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtService.generateTokenLogin(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        User currentUser = userService.findByEmail(userDTO.getEmail()).get();
        return ResponseEntity.ok(new JwtResponse(jwt, currentUser.getId(), userDetails.getUsername(), currentUser.getFullName(), userDetails.getAuthorities()));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        Optional<User> users = userService.findByEmail(user.getEmail());
        if (users.isPresent()) {
            return new ResponseEntity<>("Email already exists",HttpStatus.BAD_REQUEST);
        }
        Set<Role> roles = user.getRoles();
        for (Role role : roles) {
            if (roleService.findByName(role.getName()) == null) {
                roleService.save(role);
                roleService.flush();
            } else {
                role.setId(roleService.findByName(role.getName()).getId());
            }
        }

        userService.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }


    @GetMapping("/hello")
    public ResponseEntity<String> hello() {
        return new ResponseEntity<>("Hello World", HttpStatus.OK);
    }
}
