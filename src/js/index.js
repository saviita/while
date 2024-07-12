// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const generateNumbers = () => {
    const uniqueNumbers = []

    while (uniqueNumbers.length < 15) {
        const randomNumber = Math.ceil(Math.random() * 20)

        if(!uniqueNumbers.includes(randomNumber)) {
            uniqueNumbers.push(randomNumber)
        }
    }


    console.log(uniqueNumbers)
}
generateNumbers()