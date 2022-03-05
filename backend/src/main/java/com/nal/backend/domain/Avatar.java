package com.nal.backend.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "avatars")
public class Avatar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String imageName;

    @OneToMany(mappedBy = "avatar", cascade = CascadeType.ALL)
    private Set<User> users;

    @OneToMany(mappedBy = "avatar", cascade = CascadeType.ALL)
    private Set<Group> groups;
}
