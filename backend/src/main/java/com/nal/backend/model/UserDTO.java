package com.nal.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO implements Serializable {
    private Long id;
    private String email;
    private String password;
    private String fullName;
    private boolean gender;
    private String address;
    private String introduce;
    private String selfIntroduce;
    private LocalDate birthday;
    private LocalDate joinDate;
    private Long avatarId;
}
