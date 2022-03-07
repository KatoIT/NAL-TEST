package com.nal.backend.model;

import com.nal.backend.domain.Team;
import com.nal.backend.domain.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Set;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TeamDTO implements Serializable {
    private Long id;
    private String name;
    private String description;
    private String avatar;
    private Set<UserDTO> users;

    public TeamDTO(Team team) {
        this.id = team.getId();
        this.name = team.getName();
        this.description = team.getDescription();
        this.avatar = team.getAvatar();
        this.users = team.getUsers().stream().map(UserDTO::new).collect(Collectors.toSet());
    }
}
