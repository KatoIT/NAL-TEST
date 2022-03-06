package com.nal.backend.service.team;

import com.nal.backend.domain.Team;
import com.nal.backend.repository.ITeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeamService implements ITeamService {
    @Autowired
    private ITeamRepository teamRepository;

    @Override
    public List<Team> findAll() {
        return teamRepository.findAll();
    }

    @Override
    public Optional<Team> findById(Long id) {
        return teamRepository.findById(id);
    }

    @Override
    public Team save(Team team) {
        return teamRepository.save(team);
    }

    @Override
    public void remove(Long id) {
        teamRepository.deleteById(id);
    }

    @Override
    public Optional<Team> findTeamByName(String name) {
        return teamRepository.findTeamByName(name);
    }
}
