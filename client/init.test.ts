// angular2-meteor polyfills required for testing
import 'angular2-meteor-tests-polyfills';

// Angular 2 tests imports
//noinspection TypeScriptCheckImport
import { platformBrowserDynamicTesting, BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic';
//noinspection TypeScriptCheckImport
import { TestBed } from '@angular/core';

// Init the test framework
TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
