package com.nal.backend.controller;

import com.nal.backend.domain.Role;
import com.nal.backend.domain.User;
import com.nal.backend.model.UserDTO;
import com.nal.backend.repository.IRoleRepository;
import com.nal.backend.service.user.IUserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private IUserService userService;

    @Autowired
    private IRoleRepository roleService;

    @GetMapping("")
    public ResponseEntity<?> getAllUser() {
        List<User> users = userService.findAll();
        List<UserDTO> userDTOList = users.stream().map(UserDTO::new).collect(Collectors.toList());
        if (!userDTOList.isEmpty()) {
            return new ResponseEntity<>(userDTOList, HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>("No employees", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUser(@PathVariable("id") Long id) {
        Optional<User> optionalUser = userService.findById(id);
        UserDTO userDTO = new UserDTO();
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            BeanUtils.copyProperties(user, userDTO);
            return new ResponseEntity<>(userDTO, HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>("Employee do not exist", HttpStatus.BAD_REQUEST);
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable("id") Long id, @RequestBody UserDTO userDTO) {
        Optional<User> optionalUser = userService.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            userDTO.setId(user.getId());
            BeanUtils.copyProperties(userDTO, user);
            userService.save(user);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>("Employee do not exist", HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) {
        Optional<User> optionalUser = userService.findById(id);
        if (optionalUser.isPresent()) {
            userService.remove(id);
            return new ResponseEntity<>("Delete successful", HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>("Employee do not exist", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        Optional<User> users = userService.findByEmail(user.getEmail());
        if (users.isPresent()) {
            return new ResponseEntity<>("Email already exists", HttpStatus.BAD_REQUEST);
        }
        Role role = new Role();
        role.setName("ROLE_USER");
        if (roleService.findByName("ROLE_USER") == null) {
            roleService.save(role);
            roleService.flush();
        } else {
            role.setId(roleService.findByName(role.getName()).getId());
        }

        userService.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }


}
