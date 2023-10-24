package com.example.demo.repository;

import com.example.demo.domain.About;
import org.springframework.ui.Model;

import java.util.List;
import java.util.Optional;

public interface MemberRepository {

    About save(About about);
    Optional<About> findById(String id);

    About findLogin(String id);
    List<About> findAll();

    //Optional<About> findByInfo(String id);

    void delete(About about);

    void update(About about);

    void updatePassword(About about);

}
