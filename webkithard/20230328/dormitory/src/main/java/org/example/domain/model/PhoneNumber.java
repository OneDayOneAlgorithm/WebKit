package org.example.domain.model;

import java.util.Objects;

public class PhoneNumber {
    private final String value;

    public PhoneNumber changeValue(String value){
        return new PhoneNumber(value);
    }

    public PhoneNumber(String value) {
        this.value = value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PhoneNumber that = (PhoneNumber) o;
        return Objects.equals(value, that.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }

    public String getValue() {
        return value;
    }
}
