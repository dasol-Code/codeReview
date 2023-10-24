package com.example.demo.repository;

import com.example.demo.domain.About;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.ui.Model;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

public class NewMemberRepository implements MemberRepository {

    private final EntityManager em;

    public NewMemberRepository(EntityManager em){
        this.em = em;
    }

    public About save(About about){
        em.persist(about);
        return about;
    }
    public Optional<About> findById(String id){
        About about = em.find(About.class, id);
        return Optional.ofNullable(about);
    }

    public About findLogin (String id){
        return em.find(About.class, id);
    }
    public List<About> findAll(){
        return em.createQuery("select m from About m", About.class).getResultList();
    }

    public void delete(About about){
        em.createQuery("delete from About a where a.id = :id and a.password = :password")
                .setParameter("id", about.getId())
                .setParameter("password", about.getPassword())
                        .executeUpdate();
        em.clear();
    }
    @Modifying
    public void update(About about){
        em.createQuery("update About a set a.email = :email where a.id = :id and a.password = :password")
                .setParameter("email", about.getEmail())
                .setParameter("id", about.getId())
                .setParameter("password", about.getPassword())
                .executeUpdate();
        em.clear();
    }

    public void updatePassword(About about){
        em.createQuery("update About a set a.password = :chgpassword where a.id = :id and a.password = :password")
                .setParameter("chgpassword", about.getChgpassword())
                .setParameter("id", about.getId())
                .setParameter("password", about.getPassword())
                .executeUpdate();
        em.clear();
    }
    //import check File
}
