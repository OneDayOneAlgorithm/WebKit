package org.example.persistence;

import org.example.domain.model.DormName;
import org.example.domain.model.FeePolicy;

public class NewFeePolicy implements FeePolicy {
    @Override
    public int calculate(DormName name) {

        return 0;
    }
}
