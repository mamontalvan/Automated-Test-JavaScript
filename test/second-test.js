const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
// const assert = require('assert');
let should = require('chai').should();

//Describe Block
describe('Probando sección eliminar tareas en el aplicativo "TODO-APP"', () => {

    //It Blocks 1
    it('Eliminando una tarea del listado TODO', async() => {

        //launch-iniciamos the browser
        let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
        const taskValidate = 'Tarea Nueva Agregada por Alejandra';

        //navigate to our application
        await driver.get('https://lambdatest.github.io/sample-todo-app/');

        //Test: agregar nueva tarea
        await driver.findElement(By.id('sampletodotext')).sendKeys(taskValidate, Key.RETURN);
        // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);

        //obtenemos el valor del campo
        let textListHtml = await driver.findElement(By.xpath("//li[last()]")).getText().then((text) => text);

        //assert | afirmación using node librarie
        // assert.strictEqual(textListHtml, 'Tarea Nueva Agregada por Alejandra');

        //assert | afirmación using librarie chai - should
        textListHtml.should.equal('Other Thing');

        //Cerraremos el navegador
        await driver.quit();

    })

    //It Blocks 2
    it('Test para probar los reportes', async() => {

        //launch-iniciamos the browser
        let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
        const taskValidate = 'Other Activity';

        //navigate to our application
        await driver.get('https://lambdatest.github.io/sample-todo-app/');

        //Test: agregar nueva tarea
        await driver.findElement(By.id('sampletodotext')).sendKeys(taskValidate, Key.RETURN);
        // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);

        //obtenemos el valor del campo
        let textListHtml = await driver.findElement(By.xpath("//li[last()]")).getText().then((text) => text);

        //assert | afirmación using node librarie
        // assert.strictEqual(textListHtml, 'Tarea Nueva Agregada por Alejandra');

        //assert | afirmación using librarie chai - should
        textListHtml.should.equal(taskValidate);

        //Cerraremos el navegador
        await driver.quit();

    })
})




// (async() => {

//     //launch-iniciamos the browser
//     let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
//     const taskValidate = 'Tarea Nueva Agregada por Alejandra';

//     //navigate to our application
//     await driver.get('https://lambdatest.github.io/sample-todo-app/');

//     //Test: agregar nueva tarea
//     await driver.findElement(By.id('sampletodotext')).sendKeys(taskValidate, Key.RETURN);
//     // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);

//     //obtenemos el valor del campo
//     let textListHtml = await driver.findElement(By.xpath("//li[last()]")).getText().then((text) => text);

//     //assert | afirmación using node librarie
//     // assert.strictEqual(textListHtml, 'Tarea Nueva Agregada por Alejandra');

//     //assert | afirmación using librarie chai - should
//     textListHtml.should.equal(taskValidate);

//     //Cerraremos el navegador
//     await driver.quit();

// })();