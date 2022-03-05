package com.nal.backend.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false)
    private boolean gender;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String introduce;

    @Column(nullable = false)
    private String selfIntroduce;

    @Column(nullable = false)
    @DateTimeFormat(pattern = "yyy/MM/dd")
    private LocalDate birthday;

    @Column(nullable = false)
    @DateTimeFormat(pattern = "yyy/MM/dd")
    private LocalDate joinDate;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "usersRoles",
            joinColumns = {@JoinColumn(name = "userId")},
            inverseJoinColumns = {@JoinColumn(name = "roleId")})
    private Set<Role> roles;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "usersProgrammingLanguages",
            joinColumns = {@JoinColumn(name = "userId")},
            inverseJoinColumns = {@JoinColumn(name = "programmingLanguageId")})
    private Set<ProgrammingLanguage> programmingLanguages;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "usersGroups",
            joinColumns = {@JoinColumn(name = "userId")},
            inverseJoinColumns = {@JoinColumn(name = "groupId")})
    private Set<Group> groups;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "avatarId")
    private Avatar avatar;
}
