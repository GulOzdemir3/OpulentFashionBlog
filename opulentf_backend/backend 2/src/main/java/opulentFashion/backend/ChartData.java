package opulentFashion.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost/3000/charts/")
@RequestMapping("/api")

public class ChartData {

    private final FileService FileService;

    @Autowired
    public ChartData(FileService FileService) {
        this.FileService = FileService;
    }

    @GetMapping("/data")
    public List<String> getChartData() throws IOException {
        return FileService.getAllJsonFiles();
    }

}
