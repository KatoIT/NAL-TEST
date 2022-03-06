package com.nal.backend.service.team;

import com.nal.backend.domain.Team;
import com.nal.backend.service.IGeneralService;

import java.util.Optional;

public interface ITeamService extends IGeneralService<Team> {
    Optional<Team> findTeamByName(String name);
}
