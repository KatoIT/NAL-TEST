package com.nal.backend.domain;

import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Getter
@Setter
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

    private String fullName;

    private boolean gender;

    private String address;

    private String introduce;

    private String selfIntroduce;

    private String avatar;

    @DateTimeFormat(pattern = "yyy/MM/dd")
    private LocalDate birthday;

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
    @JoinTable(name = "usersTeams",
            joinColumns = {@JoinColumn(name = "userId")},
            inverseJoinColumns = {@JoinColumn(name = "teamId")})
    private Set<Team> teams;

}
