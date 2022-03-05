package com.nal.backend.service.role;

import com.nal.backend.domain.Role;
import com.nal.backend.service.IGeneralService;

public interface IRoleService extends IGeneralService<Role> {
    Role findByName(String name);
    void flush();
}

