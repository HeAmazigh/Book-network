package com.amazigh.booknetwork.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@EntityListeners(AuditingEntityListener.class) // if we use this we need to add @EnableJpaAuditing in main class
public class Role {

  @Id
  @GeneratedValue
  private Integer id;
  @Column(unique = true)
  private String name;

  @ManyToMany(mappedBy = "roles")
  @JsonIgnore
  private List<User> users;

  @CreatedDate
  @Column(nullable = false, updatable = false)
  private LocalDateTime createdDate;
  @LastModifiedDate
  @Column(insertable = false)
  private LocalDateTime lastModifiedDate;
}
