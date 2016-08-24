<?php

  // Llamada al WebService
  $client = new SoapClient("http://www.webservicex.net/country.asmx?WSDL");
  $result = $client->GetCountries();
  $xml = $result->GetCountriesResult;

  // procesar xml
  $output = '';
  $xml = simplexml_load_string($xml);
  foreach($xml->Table as $table) 
  {
    $output .= "<p>$table->Name</p>";
  }
  print_r($output);
