// Chakra imports
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import { Card, CardBody, CardHeader, Heading } from '@chakra-ui/react';

import BillingRow from '@/components/Tables/BillingRow';
import React from 'react';

const BillingInformation = ({ title, data }) => {
    const textColor = useColorModeValue('gray.700', 'white');
    return (
        <Card my={{ lg: '24px' }
        } me={{ lg: '24px' }}>
            <Flex direction='column'>
                <CardHeader py='12px'>
                    <Text color={textColor} fontSize='lg' fontWeight='bold'>
                        {title}
                    </Text>
                </CardHeader>
                <CardBody>
                    <Flex direction='column' w='100%'>
                        {
                            data.map((row) => {
                                return (
                                    <BillingRow
                                        name={row.name}
                                        company={row.company}
                                        email={row.email}
                                        number={row.number}
                                    />
                                );
                            })}
                    </Flex>
                </CardBody>
            </Flex>
        </Card >
    );
};

export default BillingInformation;
