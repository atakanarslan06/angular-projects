import { Component } from "@angular/core";

@Component({
    selector: "app-test",
    template: `<h1>Kredi Hesaplama Formu</h1>
    <div>
        <label>Kredi Tutarı:</label>
        <input>
    </div>
    <diV>
        <label> Kredi Tutarı:</label>
        <input>
    </diV>
    <div>
        <label>Taksit Tutarı:</label>
        <select>
            <option>1</option>
            <option>6</option>
            <option>12</option>
        </select>
    </div>
    <div>
        <button>Hesapla</button>
    </div>
    <hr>
    <div>
        <h4>Aylık Taksit Tutarı:</h4>
    </div>`,
    styleUrls: ['./test.component.scss']
})
export class TestComponent{

}