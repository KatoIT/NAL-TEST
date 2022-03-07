package com.nal.backend.model;

import com.nal.backend.domain.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Set;

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
    private String avatar;

    public UserDTO(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.fullName = user.getFullName();
        this.gender = user.isGender();
        this.address = user.getAddress();
        this.introduce = user.getIntroduce();
        this.selfIntroduce = user.getSelfIntroduce();
        this.birthday = user.getBirthday();
        this.joinDate = user.getJoinDate();
        this.avatar = user.getAvatar();
    }
}
